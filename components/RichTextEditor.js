import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { ContentState, EditorState, convertFromHTML, convertFromRaw, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
 const Editor = dynamic(
    ()=> import("react-draft-wysiwyg").then((module)=>module.Editor),
    {
    ssr:false,
 });    


 function RichTextEditor({ initialContent }) {
   const [editorState, setEditorState] = useState(() => {
     if (initialContent) {
       const contentState = convertFromRaw(JSON.parse(initialContent));
       return EditorState.createWithContent(contentState);
     } else {
       return EditorState.createEmpty();
     }
   });
 
   const handleEditorChange = editorState => {
     setEditorState(editorState);
   };
 
   return (
     <div className="w-full">
       <Editor
         readOnly={true}
         editorState={editorState}
         onEditorStateChange={handleEditorChange}
         toolbarHidden={true}
         editorClassName='w-full bg-transparent border-none outline-none'
         wrapperClassName='w-full'
         editorStyle={{
           backgroundColor: 'transparent',
           border: 'none',
           minHeight: 'auto',
           padding: 0
         }}
       />
     </div>
   );
 }
 export default RichTextEditor;