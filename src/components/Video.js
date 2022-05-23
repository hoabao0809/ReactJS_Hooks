import clipmp4 from './../video/clipmp4.mp4';
import { forwardRef, useImperativeHandle, useRef } from 'react';

// ref này do forwardRef trả về, làm đối số thứ 2 của Component
function Video(props, ref) {
  const videoRef = useRef();

  //  Sử dụng useImperativeHandle để bảo toàn tính đóng gói trong lập trình hướng đối tượng, tránh DOM ngoài có thể bị phá (như video.current.remove())
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));
  return (
    <>
      <video ref={videoRef} src={clipmp4} width={280} />
    </>
  );
}

export default forwardRef(Video);
