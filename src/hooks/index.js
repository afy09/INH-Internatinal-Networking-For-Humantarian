import { useEffect, useState } from "react";

const TrackingScripts = () => {
  const [trackingCodes, setTrackingCodes] = useState([]);

  useEffect(() => {
    const fetchTrackingCodes = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/kode_tracking`);
        const result = await response.json();

        if (result.data) {
          setTrackingCodes(result.data);
        }
      } catch (error) {
        console.error("Error fetching tracking codes:", error);
      }
    };

    fetchTrackingCodes();
  }, []);

  useEffect(() => {
    trackingCodes.forEach((track) => {
      if (!track.kode_tracking) return;

      // Cek apakah script sudah ada sebelumnya
      if (document.getElementById(`tracking-${track.id}`)) return;

      const script = document.createElement("script");
      script.id = `tracking-${track.id}`;
      script.async = true;

      if (track.nama.toLowerCase() === "facebook") {
        script.innerHTML = `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${track.kode_tracking}');
          fbq('track', 'PageView');
        `;
      } else if (track.nama.toLowerCase() === "google") {
        script.src = `https://www.googletagmanager.com/gtag/js?id=${track.kode_tracking}`;
        script.onload = () => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            window.dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", track.kode_tracking);
        };
      }

      document.head.appendChild(script);
    });
  }, [trackingCodes]);

  return null;
};

export default TrackingScripts;
