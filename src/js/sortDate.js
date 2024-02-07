export const sortDate = (a, b) => {
    // WP REST APIからのデータを使用する場合、日付は各記事のプロパティに格納されていると仮定します。
    const dateA = new Date(a.date); // a.dateは記事の日付プロパティに置き換える必要があります
    const dateB = new Date(b.date); // b.dateも同様に記事の日付プロパティに置き換えます
    return dateB - dateA;
}