using AutoMapper.Configuration.Annotations;
namespace PAI.Data.Models
{
    public abstract class InfoBaseEntity
    {
        [Microsoft.EntityFrameworkCore.Comment("Data utworzenia wpisu")]
        [Ignore]
        public DateTime? CreatedDate { get; set; }

        [Microsoft.EntityFrameworkCore.Comment("Data ostatniej aktualizacji wpisu")]
        [Ignore]
        public DateTime? UpdateDate { get; set; }

        [Microsoft.EntityFrameworkCore.Comment("Identyfikator użytkownika tworzącego wpis")]
        [Ignore]
        public int? CreatedUserId { get; set; }

        [Microsoft.EntityFrameworkCore.Comment("Identyfikator użytkownika aktualizującego wpis")]
        [Ignore]
        public int? UpdatedUserId { get; set; }

    }
}
