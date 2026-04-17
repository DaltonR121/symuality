import Image from "next/image";

type Props = {
  src: string;
  alt?: string;
  title?: string;
};

/**
 * Render a Markdoc `image` node through `next/image` so blog images get the
 * same optimization pipeline as the rest of the site. Uses `fill` + a 3:2
 * aspect-ratio wrapper; variable image ratios degrade gracefully via
 * `object-contain` rather than cropping. `not-prose` suppresses the
 * typography plugin's default image margins so our wrapper controls layout.
 */
export function PostImage({ src, alt, title }: Props) {
  return (
    <span className="not-prose relative my-6 block aspect-[3/2] w-full overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt ?? ""}
        title={title}
        fill
        sizes="(max-width: 768px) 100vw, 768px"
        className="object-contain"
      />
    </span>
  );
}
