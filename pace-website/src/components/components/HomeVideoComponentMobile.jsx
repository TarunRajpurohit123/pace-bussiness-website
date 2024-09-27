import Image from "next/image";

export default function HomeVideoComponentMobile() {
  return (
    <>
      <div className="temp--home--banner">
        <Image
          src="/main/home/tempbanner.png"
          width={640}
          height={682}
          alt="home banner"
        />
      </div>
    </>
  );
}

// export default function HomeVideoComponentMobile() {
//   return (
//     <>
//       <div className="video-background--mobile">
//         <video autoPlay loop muted className="video">
//           <source src="/vid-bg.mp4" type="video/mp4" />
//           <source src="/vid-bg.ogg" type="video/ogg" />
//           Your browser does not support the video tag.
//         </video>
//         {/* <div className="content"> */}
//         {/* Your content goes here */}
//         {/* <h1>Welcome to Our Website</h1> */}
//         {/* </div> */}
//       </div>
//     </>
//   );
// }
