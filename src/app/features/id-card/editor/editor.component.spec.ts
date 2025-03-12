// import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
// import fabric  from 'fabric';
// import { Canvas, Textbox, FabricImage } from 'fabric';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// @Component({
//   selector: 'app-editor',
//   templateUrl: './editor.component.html',
// })
// export class EditorComponent implements OnInit {
//   @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
//   canvas!: Canvas;

//   ngOnInit() {
//     this.canvas = new Canvas(this.canvasRef.nativeElement, {
//       width: 400,
//       height: 250,
//     });

//     // Load ID card template as background
//     this.loadTemplate('assets/id-card-front.png'); // Change this to your actual template path

//     // Add editable text (e.g., Name Field)
//     const nameText = new Textbox('Your Name', {
//       left: 100,
//       top: 120,
//       fontSize: 18,
//       fill: 'black',
//     });
//     this.canvas.add(nameText);
//   }

//   // Function to load the ID card template
//   async loadTemplate(frontImageUrl: string, backImageUrl: string) {
//     const frontImg = await fabric.Image.fromURL(frontImageUrl);
//     frontImg.set({
//       selectable: false,
//       evented: false,
//       scaleX: this.canvas.width! / frontImg.width!,
//       scaleY: this.canvas.height! / frontImg.height!,
//     });
  
//     this.canvas.setBackgroundImage(frontImg, this.canvas.renderAll.bind(this.canvas));
  
//     // Add back side if needed (optional)
//     if (backImageUrl) {
//       const backImg = await fabric.Image.fromURL(backImageUrl);
//       backImg.set({
//         selectable: false,
//         evented: false,
//         scaleX: this.canvas.width! / backImg.width!,
//         scaleY: this.canvas.height! / backImg.height!,
//       });
//       this.canvas.add(backImg);
//     }
//   }
  
  

//   // Upload user profile picture
//   addImage(event: Event) {
//     const input = event.target as HTMLInputElement;
//     if (input.files && input.files[0]) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const result = e.target?.result as string;
//         FabricImage.fromURL(result).then((img) => {
//           img.scaleToWidth(80); // Adjust size as needed
//           img.set({ left: 50, top: 50 }); // Adjust position as needed
//           this.canvas.add(img);
//           this.canvas.renderAll();
//         });
//       };
//       reader.readAsDataURL(input.files[0]);
//     }
//   }

//   // Save ID card as an image
//   saveAsImage() {
//     html2canvas(this.canvasRef.nativeElement).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//       const imgProps = pdf.getImageProperties(imgData);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//       pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//       pdf.save('id-card.pdf');
//     });
//   }
// }
