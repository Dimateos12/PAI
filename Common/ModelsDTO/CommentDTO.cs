using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PAI.Common.ModelsDTO
{
    public class CommentDTO
    {

        public int Id { get; set; }
        public string Body { get; set; }
        public bool IsActive { get; set; }
        public int PostId { get; set; }
        public int UserId { get; set; }
        public string? UserName { get; set; }


    }
}
