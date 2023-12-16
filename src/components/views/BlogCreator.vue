<template>
  <div class="blogcreator">
    <div class="header">
      <h1>On Shelf</h1>
    </div>

    <quill-editor
      v-model:value="state.content"
      :options="state.editorOption"
      :disabled="state.disabled"
      @blur="onEditorBlur"
      @focus="onEditorFocus"
      @ready="onEditorReady"
      @change="onEditorChange"
    />
  </div>
</template>

<script>
import { reactive } from 'vue'
import { quillEditor } from 'vue3-quill'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

export default {
  name: 'BlogCreator',
  components: {
    quillEditor,
  },
  setup() {
    const state = reactive({
      content: '<p>2333</p>', // Initial content for the editor
      editorOption: {
        placeholder: 'Write something awesome...',
        modules: {
          // You can configure toolbar options here
        },
        // Add more Quill options as needed
      },
      disabled: false,
    })

    const onEditorBlur = (quill) => {
      console.log('editor blur!', quill)
    }
    const onEditorFocus = (quill) => {
      console.log('editor focus!', quill)
    }
    const onEditorReady = (quill) => {
      console.log('editor ready!', quill)
    }
    const onEditorChange = ({ quill, html, text }) => {
      console.log('editor change!', quill, html, text)
      state.content = html // Update the content with the new HTML
    }

    return {
      state,
      onEditorBlur,
      onEditorFocus,
      onEditorReady,
      onEditorChange,
    }
  },
}
</script>

<style scoped>
.blogcreator {
  width: 100%;
  text-align: center;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  background: url('/images/IMG_6138.JPG') no-repeat center center / cover;
}
#add-blog {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: -50px;
}

#add-blog h2 {
  color: #333;
  margin-bottom: 20px;
}

input[type='text'],
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
}

.quill-editor {
  height: 200px;
  margin-bottom: 15px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.buttons button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-warning {
  background-color: #f0ad4e;
  color: white;
}
.btn-primary {
  background-color: #0275d8;
  color: white;
}
.btn-danger {
  background-color: #d9534f;
  color: white;
}

.success {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 15px;
  border-radius: 4px;
}

#preview-section {
  margin-top: 20px;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.text-bold {
  font-weight: bold;
}
</style>
