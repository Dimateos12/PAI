using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PAI.Data.Migrations
{
    /// <inheritdoc />
    public partial class Updateusermodel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "NormalId",
                table: "AspNetUsers",
                type: "integer",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NormalId",
                table: "AspNetUsers");
        }
    }
}
