using PAI.Repository.Interfaces;
using System.Linq.Expressions;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using PAI.Data;
using PAI.Data.Models;
namespace PAI.Repository.Implementations
{
    public class GenericRepository<T, TKey> : IGenericRepository<T, TKey> where T : class
    {

        protected readonly PAIDbContext _context;
        protected readonly IHttpContextAccessor _httpContext;


        /// <summary>
        /// Konstruktor 
        /// </summary>
        /// <param name="context"></param>
        /// <param name="httpContext"></param>
        public GenericRepository(PAIDbContext context, IHttpContextAccessor httpContext)
        {

            _context = context;
            _httpContext = httpContext;

        }


        /// <summary>
        ///  Pobieranie wszystkich rekordów 
        /// </summary>
        /// <returns></returns>
        public IQueryable<T> GetAll()
        {
            return _context.Set<T>().AsQueryable();
        }

        /// <summary>
        /// Znajdowanie danego rekordu
        /// </summary>
        /// <param name="expression"></param>
        /// <returns></returns>
        public IQueryable<T> Find(Expression<Func<T, bool>> expression)
        {

            return _context.Set<T>().Where(expression);
        }

        /// <summary>
        /// Filtrowanie na podstawie metod 
        /// </summary>
        /// <param name="expression"></param>
        /// <returns></returns>
        public async Task<T> FirstOfDefaultAsync(Expression<Func<T, bool>> expression)
        {

            return await _context.Set<T>().FirstOrDefaultAsync(expression);
        }


        /// <summary>
        /// Dodawanie nowego rekordu do bazy danych
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public async Task<T> AddAsync(T entity)
        {

            var newObj = await _context.Set<T>().AddAsync(entity);
            await SaveChangesAsync();
            return newObj.Entity;

        }

        /// <summary>
        /// Znajdowanie rekordu po id 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<T> GetByIdAsync(TKey id)
        {

            var obj = await _context.Set<T>().FindAsync(id);
            return obj;
        }

        /// <summary>
        /// Usuowanie rekordu 
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public async Task RemoveAsync(T obj)
        {
            _context.Set<T>().Remove(obj);
            await SaveChangesAsync();


        }

        /// <summary>
        /// Aktualizowanie podanego rekordu 
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        public async Task<T> UpdateAsync(T entity)
        {
            var entry = _context.Entry<T>(entity);
            await _context.SaveChangesAsync();
            return entry.Entity;
        }

        public T GetById(TKey id)
        {
            return _context.Set<T>().Find(id);

        }




        /// <summary>
        /// Zapisywanie zmian wykonanych na rekordzie
        /// </summary>
        /// <returns></returns>
        public async Task<int> SaveChangesAsync()
        {
            //foreach (var entity in _context.ChangeTracker
            //    .Entries()
            //    .Where(x => x.Entity is InfoBaseEntity && x.State == EntityState.Modified)
            //    .Select(x => x.Entity)
            //    .Cast<InfoBaseEntity>())
            //{
            //    entity.UpdatedUserId = null;
            //}

            //foreach (var entity in _context.ChangeTracker
            //    .Entries()
            //    .Where(x => x.Entity is InfoBaseEntity && x.State == EntityState.Added)
            //    .Select(x => x.Entity)
            //    .Cast<InfoBaseEntity>())
            //{
            //    entity.CreatedDate = DateTime.Now;
            //    entity.CreatedUserId = null;
            //}

            return await _context.SaveChangesAsync();
        }

    }
}
