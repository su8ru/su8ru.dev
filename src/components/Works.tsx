import React from "react";
import Work, { WorkProps } from "components/Work";

const Works: React.VFC = () => {
  const works: ReadonlyArray<WorkProps> = [
    {
      id: "cappuccino",
      title: "CAPPUCCINO System",
      description:
        "QR コード付きリストバンドを用いた文化祭入退場管理システムを 3 人チームで制作・運用しました。",
      github: "afes-website",
    },
    {
      id: "73afes",
      title: '73rd Afes Website & "Online" Exhibition',
      description:
        "文化祭の広報用ウェブサイトに加え、新型コロナウイルス感染症による自粛の代替としての「オンライン展示」のシステムを 3 人チームで制作・運用しました。",
      github: "afes-website",
    },
    {
      id: "frourio",
      title: "Frourio Official Document",
      description:
        "フロントエンドとバックエンドを一緒に静的型検査する TypeScript フレームワーク「frourio」の公式ドキュメントを管理しています。",
      github: "frouriojs/frourio.com",
    },
    {
      id: "kostl",
      title: "こすとれ - KO•S Train Location",
      description:
        "京王線と都営新宿線の列車走行位置を 1 画面で見れるサイトを制作しました。",
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
