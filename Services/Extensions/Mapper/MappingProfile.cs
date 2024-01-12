using AutoMapper;
using PAI.Common.ModelsDTO;
using PAI.Data.Models;

namespace PAI.Services.Extensions.Mapper;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Image, ImageDTO>();
        CreateMap<ImageDTO,Image>();
        CreateMap<Comment, CommentDTO>();
        CreateMap<CommentDTO, Comment>();    
    }
}