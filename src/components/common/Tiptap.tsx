import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import { Button } from '@/components/ui/button'
import {
  Bold, Italic, Strikethrough, Code, Undo2, Redo2,
  Heading1, Heading2, Heading3, List, ListOrdered,
  Pilcrow, Minus, ImageIcon, Underline as UnderlineIcon
} from 'lucide-react'
import { useRef } from 'react'

interface TiptapProps {
  content?: string;
  onChange?: (html: string) => void;
  heightClass?: string;
  editable?: boolean;
}

const Tiptap = ({
    content = '',
    onChange,
    heightClass = 'min-h-[150px]',
    editable = true,
  }: TiptapProps) => {
  
  const fileInputRef = useRef<HTMLInputElement>(null)

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Image,
      Underline,
    ],
    content,    
    editable,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: `focus:outline-none p-2 list-disc list-inside ${heightClass}`,
      },
    }
  })

  const insertImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      const base64 = reader.result
      editor?.chain().focus().setImage({ src: base64 as string }).run()
    }
    reader.readAsDataURL(file)
  }

  const iconButton = (onClick: () => void, isActive: boolean, Icon: any, title = '') => (
    <Button
      variant="ghost"
      size="icon"
      className={`w-8 h-8 p-1 rounded hover:bg-muted ${isActive ? 'bg-muted text-primary' : ''}`}
      onClick={onClick}
      title={title}
    >
      <Icon size={16} />
    </Button>
  )

  if (!editor) return null

  return (
    <div className="border rounded-md shadow-sm">
      {/* Toolbar */}
      <div className="flex justify-end ml-auto gap-1 border-b px-2 py-2 bg-gray-50">
        {iconButton(() => editor.chain().focus().toggleBold().run(), editor.isActive('bold'), Bold, 'Bold')}
        {iconButton(() => editor.chain().focus().toggleItalic().run(), editor.isActive('italic'), Italic, 'Italic')}
        {iconButton(() => editor.chain().focus().toggleStrike().run(), editor.isActive('strike'), Strikethrough, 'Strikethrough')}
        {iconButton(() => editor.chain().focus().toggleCode().run(), editor.isActive('code'), Code, 'Inline Code')}
        {iconButton(() => editor.chain().focus().toggleUnderline().run(), editor.isActive('underline'), UnderlineIcon, 'Underline')}
        {iconButton(() => editor.chain().focus().setParagraph().run(), editor.isActive('paragraph'), Pilcrow, 'Paragraph')}
        {iconButton(() => editor.chain().focus().toggleHeading({ level: 1 }).run(), editor.isActive('heading', { level: 1 }), Heading1, 'H1')}
        {iconButton(() => editor.chain().focus().toggleHeading({ level: 2 }).run(), editor.isActive('heading', { level: 2 }), Heading2, 'H2')}
        {iconButton(() => editor.chain().focus().toggleHeading({ level: 3 }).run(), editor.isActive('heading', { level: 3 }), Heading3, 'H3')}
        {iconButton(() => editor.chain().focus().toggleBulletList().run(), editor.isActive('bulletList'), List, 'Bullet List')}
        {iconButton(() => editor.chain().focus().toggleOrderedList().run(), editor.isActive('orderedList'), ListOrdered, 'Ordered List')}
        {iconButton(() => editor.chain().focus().setHorizontalRule().run(), false, Minus, 'Horizontal Rule')}
        {iconButton(() => editor.chain().focus().undo().run(), false, Undo2, 'Undo')}
        {iconButton(() => editor.chain().focus().redo().run(), false, Redo2, 'Redo')}

        {/* Image Upload */}
        <Button
          variant="ghost"
          size="icon"
          className="w-8 h-8 p-1 rounded hover:bg-muted"
          onClick={() => fileInputRef.current?.click()}
          title="Insert Image"
        >
          <ImageIcon size={16} />
        </Button>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={insertImage}
        />
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap
