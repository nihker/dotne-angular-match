namespace DatingApp.API.Data
{
    public interface IAuthRepository
    {
         
         Task<User> register(User user, string password){

         }
    }
}