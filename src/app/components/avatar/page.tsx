'use client';
import { ComponentPage } from '@/components/ComponentPage';

export default function AvatarPage() {
  return (
    <ComponentPage name="Avatar" description="Avatars represent users or entities with images, initials, or icons." slug="avatar">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Image</td><td>User photo or uploaded image displayed in a circle</td></tr>
          <tr><td>Initials</td><td>First letter(s) of the user&apos;s name on a colored background</td></tr>
          <tr><td>Icon</td><td>Generic user icon as a fallback when no image or name is available</td></tr>
          <tr><td>Group</td><td>Stacked avatars showing multiple users with overlap</td></tr>
          <tr><td>With Badge</td><td>Avatar with a status indicator badge (online, offline, busy)</td></tr>
          <tr><td>Square</td><td>Rounded-rectangle variant for non-user entities like teams or orgs</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Circular or rounded wrapper that clips content</td></tr>
          <tr><td>2</td><td>Image</td><td>User photo rendered inside the container</td></tr>
          <tr><td>3</td><td>Initials Text</td><td>Fallback text showing user initials</td></tr>
          <tr><td>4</td><td>Icon</td><td>Generic person icon as final fallback</td></tr>
          <tr><td>5</td><td>Badge</td><td>Optional status indicator positioned at the corner</td></tr>
        </tbody>
      </table>

      <h2>Sizes</h2>
      <table>
        <thead><tr><th>Size</th><th>Pixels</th><th>Usage</th></tr></thead>
        <tbody>
          <tr><td>XSmall</td><td>24px</td><td>Compact lists, inline mentions</td></tr>
          <tr><td>Small</td><td>32px</td><td>Comments, chat bubbles</td></tr>
          <tr><td>Medium</td><td>40px</td><td>Default, cards, headers</td></tr>
          <tr><td>Large</td><td>48px</td><td>Profile sections</td></tr>
          <tr><td>XLarge</td><td>64px</td><td>Profile pages, hero sections</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Normal display</td><td>Image, initials, or icon visible</td></tr>
          <tr><td>Hover</td><td>Mouse over avatar</td><td>Subtle scale or overlay effect</td></tr>
          <tr><td>Loading</td><td>Image is being fetched</td><td>Shimmer placeholder</td></tr>
          <tr><td>Error</td><td>Image failed to load</td><td>Falls back to initials or icon</td></tr>
          <tr><td>Clickable</td><td>Avatar acts as a button</td><td>Cursor pointer, focus ring on keyboard</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Use image avatars when user photos are available for quick recognition</li>
        <li>Fall back to initials when no image is provided — use contrasting background colors</li>
        <li>Use the icon fallback only as a last resort when neither image nor name is available</li>
        <li>In avatar groups, show a &quot;+N&quot; indicator for overflow beyond the visible count</li>
        <li>Ensure avatar images have meaningful alt text for screen readers</li>
        <li>Do not use avatars for decorative purposes — they should represent real users or entities</li>
      </ul>

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>img</td><td>Identifies the avatar as an image element</td></tr>
          <tr><td>alt</td><td>User name</td><td>Descriptive text for the avatar image</td></tr>
          <tr><td>aria-label</td><td>string</td><td>Accessible name when avatar is interactive</td></tr>
          <tr><td>role=&quot;button&quot;</td><td>When clickable</td><td>Indicates the avatar is actionable</td></tr>
          <tr><td>Keyboard</td><td>Enter / Space</td><td>Activates clickable avatar</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>avatar-border-radius</td><td>50%</td><td>Fully circular shape</td></tr>
          <tr><td>avatar-bg</td><td>primary-100</td><td>Background for initials variant</td></tr>
          <tr><td>avatar-text-color</td><td>primary-700</td><td>Initials text color</td></tr>
          <tr><td>avatar-border</td><td>2px white</td><td>Border for grouped avatars</td></tr>
          <tr><td>avatar-badge-size</td><td>12px</td><td>Status badge diameter</td></tr>
          <tr><td>avatar-group-overlap</td><td>-8px</td><td>Negative margin for stacked avatars</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'circle' | 'square';
  badge?: 'online' | 'offline' | 'busy' | 'away';
  onClick?: () => void;
  fallback?: 'initials' | 'icon';
}

interface AvatarGroupProps {
  max?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}`}</code></pre>
      <pre><code>{`<Avatar
  src="/images/user.jpg"
  alt="Jane Doe"
  name="Jane Doe"
  size="md"
  badge="online"
/>

<AvatarGroup max={3}>
  <Avatar name="Alice" src="/alice.jpg" />
  <Avatar name="Bob" src="/bob.jpg" />
  <Avatar name="Charlie" />
  <Avatar name="Diana" />
</AvatarGroup>`}</code></pre>
    </ComponentPage>
  );
}
