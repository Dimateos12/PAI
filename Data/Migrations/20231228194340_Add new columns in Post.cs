using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PAI.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddnewcolumnsinPost : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Posts",
                type: "timestamp without time zone",
                nullable: true,
                comment: "Data utworzenia wpisu");

            migrationBuilder.AddColumn<int>(
                name: "CreatedUserId",
                table: "Posts",
                type: "integer",
                nullable: true,
                comment: "Identyfikator użytkownika tworzącego wpis");

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Posts",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "Posts",
                type: "timestamp without time zone",
                nullable: true,
                comment: "Data ostatniej aktualizacji wpisu");

            migrationBuilder.AddColumn<int>(
                name: "UpdatedUserId",
                table: "Posts",
                type: "integer",
                nullable: true,
                comment: "Identyfikator użytkownika aktualizującego wpis");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "CreatedUserId",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "UpdatedUserId",
                table: "Posts");
        }
    }
}
