using System.Web.Http;

namespace CharacterBuilderAPI.Controllers
{
    public class TestController : ApiController
    {
		[HttpGet]
		public string Get()
		{
			return "test Success";
		}
    }
}
