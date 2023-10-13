using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PAI.Data.Models;

namespace PAI.Data
{
    public class PAIDbContext: IdentityDbContext
    {
        public virtual DbSet<TESTCONNECTION> Connections { get; set; }
        public PAIDbContext(DbContextOptions<PAIDbContext> options) : base(options)
        {
            
        }
    }
}
