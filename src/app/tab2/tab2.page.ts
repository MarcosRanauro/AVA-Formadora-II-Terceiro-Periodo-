import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  altura: string = '';
  peso: string = '';
  imc: number | null = null;

  constructor(private toastController: ToastController) {}

  async calcularIMC() {
    const alturaEmMetros = parseFloat(this.altura.replace(/[,.]/g, '.'));
    const pesoEmKg = parseFloat(this.peso.replace(/[,.]/g, '.'));

    // Validate height and weight before creating the toast
    const regexAltura = /^\d{1}([.,]\d{2})?$/; // Restrict height format
    const regexPeso = /^\d{1,3}([.,]\d{1,2})?$/;
    if (!regexAltura.test(this.altura || '') || !regexPeso.test(this.peso || '')) {
      // Height or weight is invalid, show error toast
      const toast = await this.toastController.create({
        message: 'Altura ou peso inválido. Verifique o formato.',
        duration: 2000,
        position: 'top',
        color: 'danger',
      });
      await toast.present();
      return; // Prevent further calculation if input is invalid
    }

    // Height and weight are valid, proceed with calculation
    this.imc = parseFloat((pesoEmKg / (alturaEmMetros ** 2)).toFixed(2));

    // Calculation successful, show success toast
    const successToast = await this.toastController.create({
      message: 'IMC calculado com sucesso!',
      duration: 2000,
      position: 'top'
    });
    await successToast.present();
  }


  limparCampos() {
    this.altura = '';
    this.peso = '';
    this.imc = null;
  }
}
