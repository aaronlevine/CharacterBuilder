using System.Web;
using System.Web.Optimization;

namespace CharacterBuilder
{
	public class BundleConfig
	{
		// For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
		public static void RegisterBundles(BundleCollection bundles)
		{

			bundles.Add(new ScriptBundle("~/bundles/scripts").Include(
				"~/Scripts/angular.js"
				,"~/Scripts/angular-route.js"

				,"~/app/app.js"
				,"~/app/routes.js"
				,"~/app/services.js"
				//,"~/app/common.js"
				
				,"~/app/routes.js"
				,"~/app/controllers/*.js"
				//, "~/app/filters/*.js"
				//"~/app/directives/*.js"
				//"~/app/services.js"
				
				));

			bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
					  "~/Scripts/bootstrap.js",
					  "~/Scripts/respond.js"));

			bundles.Add(new StyleBundle("~/Content/css").Include(
					  "~/Content/bootstrap.css",
					  "~/Content/site.css"));
		}
	}
}
