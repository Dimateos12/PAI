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


export default function RichEditor(){

  const [editorContent, setEditorContent] = useState([]);
  
  // to do handler click 
  function handleClick(data){
    // dodac id i zbudować json do wstawiania edycji  
      AddComment(editorContent).then(
        response=>console.log(response)
      );
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
            <Button variant="contained">Dodaj Komentarz</Button>
        </CardActionArea>
    </Card>
  );
}