using PAI.Common.Enums;

namespace PAI.Common.ModelsDTO;

public class ResponseDTO<T>
{

    public bool Success { get; set; } = true;
    public string Message { get; set; } = "The procedure was successful ";
    public ErrorEnum ErrorCode { get; set; }

    public T? data { get; set; }
    public ResponseDTO(){}

    public ResponseDTO(ErrorEnum error)
    {
        ErrorCode = error;
        Success= false;
        Message = "The procedure ended with an error";
    }
}