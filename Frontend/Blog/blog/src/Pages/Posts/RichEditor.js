import { Button, Card, CardActionArea, CardHeader } from "@mui/material";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditorProvider,
  RichTextField,
} from "mui-tiptap";
import { useState } from "react";
import { AddComment } from "../../setup/axios/providers";


export default function RichEditor({postId}){

  const [editorContent, setEditorContent] = useState([""]);
  
  // to do handler click 
  function handleClick(){
    const dataSender = {
      "body": editorContent,
      "isActive": false,
      "postId": postId,
      "userId": 2
    }  
      AddComment(dataSender).then(
      
      );
      window.location.reload(); 
  }

const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Dodaj komentarz...</p>",
    onUpdate({editor}) {
      setEditorContent(editor.getHTML());
    }
  });

  
  return (
    <Card style={{width: "21%", marginTop: "2%"}}>
        <CardHeader title="Dodaj komentarz" />
        <RichTextEditorProvider editor={editor}>
        <RichTextField
            controls={
            <MenuControlsContainer>
                <MenuSelectHeading />
                <MenuDivider />
                <MenuButtonBold />
                <MenuButtonItalic />
                {/* Add more controls of your choosing here */}
            </MenuControlsContainer>
            }
        />
        </RichTextEditorProvider>
        <CardActionArea style={{marginTop: "2%"}}>
            <Button variant="contained" onClick={handleClick} >Dodaj Komentarz</Button>
        </CardActionArea>
    </Card>
  );
}