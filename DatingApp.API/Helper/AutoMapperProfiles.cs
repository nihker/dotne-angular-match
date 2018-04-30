using DatingApp.API.Dtos;
using DatingApp.API.Models;
using AutoMapper;

namespace DatingApp.API.Helper
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>();

            CreateMap<User, UserForDetailedDto>();
        }
    }
}