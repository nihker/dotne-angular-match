using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        // CHECK EMAIL, PHOTNUMBER, CREDITCARD
        // [EmailAddress]
        // [Phone]
        // [CreditCard]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You mut specify password between 4 or 8 characters")]
        public string Password { get; set; }
        
    }
}