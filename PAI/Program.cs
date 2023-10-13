using PAI.Data;
using PAI.Repository.Implementations;
using PAI.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpContextAccessor();

builder.Services.AddDbContext<PAIDbContext>
    (opt => opt.UseNpgsql(builder.Configuration.GetConnectionString("PAIDbConnection")));

#region RepositoryInjection
builder.Services.AddTransient(typeof(IGenericRepository<,>),typeof(GenericRepository<,>));
#endregion

var app = builder.Build();
app.UseHttpsRedirection();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



app.UseAuthorization();

app.MapControllers();

app.Run();
