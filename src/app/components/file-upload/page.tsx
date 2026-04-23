'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function FileUploadPage() {
  return (
    <ComponentPage name="File Upload" description="File upload components allow users to select and upload files from their device." slug="file-upload">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Dropzone</td><td>Drag-and-drop area for file upload</td></tr>
          <tr><td>Button</td><td>Simple button that opens file picker</td></tr>
          <tr><td>With Preview</td><td>Shows thumbnail previews of selected files</td></tr>
          <tr><td>Multi-File</td><td>Allows selecting multiple files at once</td></tr>
          <tr><td>With Progress</td><td>Shows upload progress for each file</td></tr>
          <tr><td>Avatar Upload</td><td>Circular upload area for profile images</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Dropzone</td><td>Dashed-border area for drag-and-drop</td></tr>
          <tr><td>2</td><td>Upload Icon</td><td>Cloud or arrow icon indicating upload</td></tr>
          <tr><td>3</td><td>Label Text</td><td>Instructions for uploading</td></tr>
          <tr><td>4</td><td>Browse Link</td><td>Clickable text to open file picker</td></tr>
          <tr><td>5</td><td>File List</td><td>List of selected/uploaded files</td></tr>
          <tr><td>6</td><td>Progress Bar</td><td>Upload progress indicator per file</td></tr>
          <tr><td>7</td><td>Remove Button</td><td>Action to remove a selected file</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Empty</td><td>No files selected</td><td>Dropzone with instructions</td></tr>
          <tr><td>Drag Over</td><td>File dragged over dropzone</td><td>Highlighted border</td></tr>
          <tr><td>Files Selected</td><td>Files chosen</td><td>File list visible</td></tr>
          <tr><td>Uploading</td><td>Files being uploaded</td><td>Progress bars active</td></tr>
          <tr><td>Complete</td><td>Upload finished</td><td>Success indicators shown</td></tr>
          <tr><td>Error</td><td>Upload failed</td><td>Error message per file</td></tr>
          <tr><td>Disabled</td><td>Upload not available</td><td>Reduced opacity</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Clearly state accepted file types and size limits</li>
        <li>Show file previews for images when possible</li>
        <li>Provide progress feedback during upload</li>
        <li>Allow users to remove files before and during upload</li>
        <li>Support both drag-and-drop and click-to-browse</li>
        <li>Do not auto-upload — let users review files first</li>
      </ul>
      <DoDont slug="file-upload" doItems={["Show accepted file types and size limits", "Provide progress feedback during upload", "Allow drag-and-drop as well as click-to-browse"]} dontItems={["Accept all file types without validation", "Upload files without user confirmation", "Hide error messages for failed uploads"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>button</td><td>Dropzone acts as a button for keyboard users</td></tr>
          <tr><td>aria-label</td><td>Upload files</td><td>Accessible name for the dropzone</td></tr>
          <tr><td>aria-describedby</td><td>ID</td><td>Links to file type and size restrictions</td></tr>
          <tr><td>Keyboard</td><td>Enter / Space</td><td>Opens file picker</td></tr>
          <tr><td>aria-live</td><td>polite</td><td>Announces upload progress and completion</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>upload-border-color</td><td>neutral-300</td><td>Dropzone border color</td></tr>
          <tr><td>upload-border-style</td><td>dashed</td><td>Border style</td></tr>
          <tr><td>upload-bg</td><td>neutral-50</td><td>Dropzone background</td></tr>
          <tr><td>upload-active-border</td><td>primary-500</td><td>Border on drag over</td></tr>
          <tr><td>upload-border-radius</td><td>12px</td><td>Corner rounding</td></tr>
          <tr><td>upload-icon-size</td><td>48px</td><td>Upload icon size</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface FileUploadProps {
  accept?: string;
  maxSize?: number;
  maxFiles?: number;
  multiple?: boolean;
  onFilesSelected?: (files: File[]) => void;
  onUpload?: (files: File[]) => Promise<void>;
  showPreview?: boolean;
  disabled?: boolean;
  label?: string;
  description?: string;
}`}</code></pre>
      <pre><code>{`<FileUpload
  accept="image/*,.pdf"
  maxSize={5 * 1024 * 1024}
  maxFiles={5}
  multiple
  showPreview
  onFilesSelected={handleFiles}
  label="Upload documents"
  description="PNG, JPG, or PDF up to 5MB"
/>`}</code></pre>
    </ComponentPage>
  );
}
