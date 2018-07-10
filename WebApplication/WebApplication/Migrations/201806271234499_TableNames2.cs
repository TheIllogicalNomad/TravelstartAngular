namespace WebApplication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TableNames2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.User", "FirstName", c => c.String());
            AddColumn("dbo.User", "Surname", c => c.String());
            AddColumn("dbo.User", "Title", c => c.String());
            AddColumn("dbo.User", "DOB", c => c.String());
            AddColumn("dbo.User", "Address", c => c.String());
            AddColumn("dbo.User", "City", c => c.String());
            AddColumn("dbo.User", "PostCode", c => c.String());
            AddColumn("dbo.User", "Age", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.User", "Age");
            DropColumn("dbo.User", "PostCode");
            DropColumn("dbo.User", "City");
            DropColumn("dbo.User", "Address");
            DropColumn("dbo.User", "DOB");
            DropColumn("dbo.User", "Title");
            DropColumn("dbo.User", "Surname");
            DropColumn("dbo.User", "FirstName");
        }
    }
}
