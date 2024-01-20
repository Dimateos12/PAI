using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PAI.Common.ModelsDTO
{
    public class PostDTO
    {
        
    public int Id { get; set; }
    public string Title { get; set; }
    public string Body { get; set; }
    public int Category { get; set; }
    public bool IsActive { get; set; }
    public string? UserName { get; set; } 
    public string Image { get; set; }
    public bool IsFeatured { get; set; } 
}
}

