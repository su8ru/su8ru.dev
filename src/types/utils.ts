/**
 * TypeScriptで最低一つは必須なオプションオブジェクトの型を作る - Qiita
 * https://qiita.com/uhyo/items/583ddf7af3b489d5e8e9
 *
 * TypeScriptで「最低一つは必須なオプションオブジェクトの型」を読みやすくしてみる - Qiita
 * https://qiita.com/u-sho/items/4d02d722efdaf4feefa6
 */
export type RequireOne<T, K extends keyof T = keyof T> = K extends keyof T
  ? Required<Pick<T, K>> & Partial<Omit<T, K>>
  : never;
