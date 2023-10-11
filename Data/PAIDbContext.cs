using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace PAI.Data;

public class PAIDbContext : IdentityDbContext
{
    public PAIDbContext(DbContextOptions<PAIDbContext> options) : base(options)
    {
        
    }
}