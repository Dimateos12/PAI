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


export default function RichEditor(){

const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Dodaj komentarz...</p>",
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