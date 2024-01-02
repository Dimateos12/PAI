using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace PAI.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddSectionstoForum : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Sections",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Title = table.Column<string>(type: "text", nullable: false),
                    CreatedDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: true, comment: "Data utworzenia wpisu"),
                    UpdateDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: true, comment: "Data ostatniej aktualizacji wpisu"),
                    CreatedUserId = table.Column<int>(type: "integer", nullable: true, comment: "Identyfikator użytkownika tworzącego wpis"),
                    UpdatedUserId = table.Column<int>(type: "integer", nullable: true, comment: "Identyfikator użytkownika aktualizującego wpis")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sections", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Sections");
        }
    }
}
