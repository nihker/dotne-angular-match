using DatingApp.API.Dtos;
using DatingApp.API.Models;
using AutoMapper;
using System.Linq;
using System;

namespace DatingApp.API.Helper
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>()
                .ForMember(dest => dest.PhotoUrl, opt => {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest => dest.Age, opt => {
                    opt.ResolveUsing(d => d.DateOfBirh.CalculateAge());
                });

            CreateMap<User, UserForDetailedDto>();

            CreateMap<Photo, PhotosForDetailedDto>();
        }
    }
}