/**
 * Oembed Video
 */

import $ from 'jquery';

// Module template
import './_oembed-video.twig';

// Module styles
import './_oembed-video.scss';

export const name = 'oembed-video';

export function disable() {}

export function enable() {
  function labnolIframe(div) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute(
      'src',
      `https://www.youtube.com/embed/${div.dataset.id}?autoplay=1&rel=0`
    );
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '1');
    iframe.setAttribute(
      'allow',
      'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    );
    div.parentNode.replaceChild(iframe, div);
  }

  function initYouTubeVideos() {
    const playerElements = document.getElementsByClassName('youtube-player');
    // eslint-disable-next-line no-plusplus
    for (let n = 0; n < playerElements.length; n++) {
      const videoId = playerElements[n].dataset.id;
      const div = document.createElement('div');
      div.setAttribute('data-id', videoId);
      const thumbNode = document.createElement('img');
      thumbNode.src = 'https://i.ytimg.com/vi/ID/hqdefault.jpg'.replace(
        'ID',
        videoId
      );
      div.appendChild(thumbNode);
      const playButton = document.createElement('div');
      playButton.setAttribute('class', 'play');
      div.appendChild(playButton);
      div.onclick = function onclick() {
        labnolIframe(this);
      };
      playerElements[n].appendChild(div);
    }
  }

  $(document).ready(function init() {
    initYouTubeVideos();
  });
}

export default enable;
