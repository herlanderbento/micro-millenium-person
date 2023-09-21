export class ImageUrl {
  public static create(imageUrl: string) {
    if (!process.env.NODE_ENV_API_URL) {
      throw new Error("NODE_ENV_API_URL environment variable is not set");
    }
    return `${process.env.NODE_ENV_API_URL}/profile/${imageUrl}`;
  }
}
