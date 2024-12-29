// // import { Pipe, PipeTransform } from '@angular/core';
// // import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// // @Pipe({
// //   name: 'safeUrl',
// //   standalone: true,
// // })
// // export class SafeUrlPipe implements PipeTransform {
// //   constructor(private sanitizer: DomSanitizer) {}

// //   transform(url: string): SafeResourceUrl {
// //     // Convert URLs if needed (e.g., YouTube)
// //     if (url.includes('youtube.com/watch')) {
// //       url = url.replace('watch?v=', 'embed/');
// //     }
// //     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
// //   }
// // }
// import { Pipe, PipeTransform } from '@angular/core';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// @Pipe({
//   name: 'safeUrl'
// })
// export class SafeUrlPipe implements PipeTransform {
//   constructor(private sanitizer: DomSanitizer) {}
//   transform(url: string): SafeResourceUrl {
//     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
//   }
// }
// import { Pipe, PipeTransform } from '@angular/core';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// @Pipe({
//   name: 'safeUrl'
// })
// export class SafeUrlPipe implements PipeTransform {
//   constructor(private sanitizer: DomSanitizer) {}

//   transform(url: string): SafeResourceUrl {
//     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
//   }
// }
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
