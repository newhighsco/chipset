export interface ImageProps {
  src?: string
  sources?: Array<React.SourceHTMLAttributes<HTMLSourceElement>>
  loading?: React.ImgHTMLAttributes<HTMLImageElement>['loading']
  decoding?: React.ImgHTMLAttributes<HTMLImageElement>['decoding']
  alt?: string
  className?: string
}
