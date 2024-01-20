using PAI.Common.ModelsDTO;
using PAI.Data.Models;

namespace PAI.Services.Interfaces;

public interface ICommentService : IGenericService<Comment, int, Comment,int>
{
    public ResponseDTO<List<CommentDTO>> GetListByIdPost(int id);
    public ResponseDTO<List<Comment>> GetCommentToAccept();
    public ResponseDTO<List<Comment>> GetCommentByUserId(int id);


}