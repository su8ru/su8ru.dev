import React from "react";
import Work, { WorkProps } from "components/Work";

const Works: React.VFC = () => {
  const works: ReadonlyArray<WorkProps> = [
    {
      title: "CAPPUCCINO System",
      description:
        "QR コード付きリストバンドを用いた文化祭入退場管理システムを 3 人チームで制作・運用しました。",
      images: ["cappuccino-1.png", "cappuccino-2.jpg"],
      github: "afes-website",
    },
    {
      title: '73rd Afes Website & "Online" Exhibition',
      description:
        "文化祭の広報用ウェブサイトに加え、新型コロナウイルス感染症による自粛の代替としての「オンライン展示」のシステムを 3 人チームで制作・運用しました。",
      images: ["73afes-1.jpg", "73afes-2.jpg"],
      github: "afes-website",
    },
    {
      title: "Frourio Official Document",
      description:
        "フロントエンドとバックエンドを一緒に静的型検査する TypeScript フレームワーク「frourio」の公式ドキュメントを管理しています。",
      images: ["frourio-1.jpg", "frourio-2.jpg"],
      github: "frouriojs/frourio.com",
    },
    {
      title: "こすとれ - KO•S Train Location",
      description:
        "京王線と都営新宿線の列車走行位置を 1 画面で見れるサイトを制作しました。",
      images: ["kostl-1.jpg", "kostl-2.jpg"],
      github: "su8ru/kostl",
    },
  ] as const;

  return (
    <>
      {works.map((workProps, i) => (
        <Work {...workProps} key={i} />
      ))}
    </>
  );
};

export default Works;
