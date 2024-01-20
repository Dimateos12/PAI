using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace PAI.Repository.Interfaces
{
    public interface IGenericRepository<T, TKey> where T : class
    {
        IQueryable<T> GetAll();
        IQueryable<T> Find(Expression<Func<T, bool>> expression);
        Task<T> AddAsync(T entity);
        Task<T> GetByIdAsync(TKey id);
        T GetById(TKey id);

        Task<T> UpdateAsync(T entity);

    }
}
