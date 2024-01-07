using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PAI.Data.Migrations
{
    /// <inheritdoc />
    public partial class Addpostidtocommentsection : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CommentId",
                table: "Comments",
                newName: "PostId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PostId",
                table: "Comments",
                newName: "CommentId");
        }
    }
}
