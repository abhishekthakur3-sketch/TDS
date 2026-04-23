'use client';
import { ComponentPage } from '@/components/ComponentPage';
import { DoDont } from '@/components/mdx';

export default function AudioPlayerPage() {
  return (
    <ComponentPage name="Audio Player" description="Audio players provide controls for playing audio content." slug="audio-player">
      <h2>Variants</h2>
      <table>
        <thead><tr><th>Variant</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Default</td><td>Standard player with play, pause, and progress</td></tr>
          <tr><td>Compact</td><td>Minimal inline player</td></tr>
          <tr><td>With Playlist</td><td>Player with a list of tracks</td></tr>
          <tr><td>With Waveform</td><td>Player showing audio waveform visualization</td></tr>
          <tr><td>With Thumbnail</td><td>Player with album art or cover image</td></tr>
          <tr><td>Mini Player</td><td>Floating mini player bar</td></tr>
        </tbody>
      </table>

      <h2>Anatomy</h2>
      <table>
        <thead><tr><th>#</th><th>Element</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Container</td><td>Wrapper for all player controls</td></tr>
          <tr><td>2</td><td>Play/Pause Button</td><td>Primary playback toggle</td></tr>
          <tr><td>3</td><td>Progress Bar</td><td>Seekable timeline of the track</td></tr>
          <tr><td>4</td><td>Time Display</td><td>Current time and total duration</td></tr>
          <tr><td>5</td><td>Volume Control</td><td>Volume slider with mute toggle</td></tr>
          <tr><td>6</td><td>Track Info</td><td>Title, artist, and album art</td></tr>
          <tr><td>7</td><td>Skip Controls</td><td>Previous and next track buttons</td></tr>
        </tbody>
      </table>

      <h2>States</h2>
      <table>
        <thead><tr><th>State</th><th>Description</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td>Idle</td><td>No audio loaded</td><td>Controls disabled</td></tr>
          <tr><td>Ready</td><td>Audio loaded</td><td>Play button enabled</td></tr>
          <tr><td>Playing</td><td>Audio is playing</td><td>Pause button shown</td></tr>
          <tr><td>Paused</td><td>Audio is paused</td><td>Play button shown</td></tr>
          <tr><td>Buffering</td><td>Audio is loading</td><td>Spinner on play button</td></tr>
          <tr><td>Ended</td><td>Track finished</td><td>Play button to restart</td></tr>
          <tr><td>Error</td><td>Playback failed</td><td>Error message shown</td></tr>
        </tbody>
      </table>

      <h2>Usage Guidelines</h2>
      <ul>
        <li>Always show current time and total duration</li>
        <li>Provide keyboard-accessible play/pause and seek controls</li>
        <li>Allow volume adjustment with a slider</li>
        <li>Show buffering state when audio is loading</li>
        <li>Support keyboard shortcuts (Space for play/pause, arrows for seek)</li>
        <li>Do not auto-play audio — let users initiate playback</li>
      </ul>
      <DoDont slug="audio-player" doItems={["Provide visible playback controls", "Show progress and duration clearly", "Support keyboard controls for accessibility"]} dontItems={["Auto-play audio without user consent", "Hide the mute/volume control", "Use for background music on web pages"]} />

      <h2>Accessibility</h2>
      <table>
        <thead><tr><th>Attribute</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>Role</td><td>region</td><td>Landmark for the audio player</td></tr>
          <tr><td>aria-label</td><td>Audio player</td><td>Accessible name</td></tr>
          <tr><td>aria-label</td><td>Play / Pause</td><td>Button labels</td></tr>
          <tr><td>aria-valuenow</td><td>number</td><td>Current playback position</td></tr>
          <tr><td>Keyboard</td><td>Space</td><td>Toggle play/pause</td></tr>
          <tr><td>Keyboard</td><td>Arrow keys</td><td>Seek forward/backward</td></tr>
        </tbody>
      </table>

      <h2>Design Tokens</h2>
      <table>
        <thead><tr><th>Token</th><th>Value</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td>player-bg</td><td>white</td><td>Player background</td></tr>
          <tr><td>player-border-radius</td><td>12px</td><td>Corner rounding</td></tr>
          <tr><td>player-progress-color</td><td>primary-600</td><td>Progress bar fill</td></tr>
          <tr><td>player-progress-track</td><td>neutral-200</td><td>Progress bar track</td></tr>
          <tr><td>player-button-size</td><td>40px</td><td>Control button size</td></tr>
          <tr><td>player-shadow</td><td>elevation-1</td><td>Player shadow</td></tr>
        </tbody>
      </table>

      <h2>Developer Handoff</h2>
      <pre><code>{`interface AudioPlayerProps {
  src: string;
  title?: string;
  artist?: string;
  thumbnail?: string;
  autoPlay?: boolean;
  loop?: boolean;
  showWaveform?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  onTimeUpdate?: (currentTime: number) => void;
}`}</code></pre>
      <pre><code>{`<AudioPlayer
  src="/audio/podcast-episode-1.mp3"
  title="Episode 1: Getting Started"
  artist="Design System Podcast"
  thumbnail="/covers/ep1.jpg"
/>

<AudioPlayer
  src={track.url}
  title={track.title}
  artist={track.artist}
  showWaveform
  onEnded={playNextTrack}
/>`}</code></pre>
    </ComponentPage>
  );
}
