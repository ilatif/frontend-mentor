import QRCodeImage from './qr-code-image';
import './qr-code-box.css';

export default function QRCodeBox() {
  return <>
    <div className="box">
      <QRCodeImage />
      <p className="main-heading">Improve your front-end skills by building projects</p>
      <p className="sub-heading">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  </>;
}
