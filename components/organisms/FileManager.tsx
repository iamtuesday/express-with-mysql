import Image from "next/image";
import { FC, useState, useEffect } from "react";
import {useRouter} from "next/router";

export const FileManager = () => {
    const router = useRouter();
  return (
    <main className="FileManager">
      <div className="FileManager-Card" onClick={() => router.push("/estudio-moriel")}>
        <Image
          src="/img/file.png"
          alt=""
          width={300}
          height={300}
          className="FileManager-File"
        />
        <h2 className="FileManager-h2">Estudio Moriel</h2>
      </div>

      <div className="FileManager-Card">
        <Image
          src="/img/file.png"
          alt=""
          width={300}
          height={300}
          className="FileManager-File"
        />
        <h2 className="FileManager-h2">Incan Electric</h2>
      </div>

      <div className="FileManager-Card">
        <Image
          src="/img/file.png"
          alt=""
          width={300}
          height={300}
          className="FileManager-File"
        />
        <h2 className="FileManager-h2">Virginia Abogada</h2>
      </div>

      <div className="FileManager-Card">
        <Image
          src="/img/file.png"
          alt=""
          width={300}
          height={300}
          className="FileManager-File"
        />
        <h2 className="FileManager-h2">Electrical Company</h2>
      </div>

      <div className="FileManager-Card">
        <Image
          src="/img/file.png"
          alt=""
          width={300}
          height={300}
          className="FileManager-File"
        />
        <h2 className="FileManager-h2">Electrical Company 2</h2>
      </div>
    </main>
  );
};
