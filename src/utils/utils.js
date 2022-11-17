export const currencyFormatter = new Intl.NumberFormat('es-ES', {               /* Nuevo objeto para modificar el formato de las cifras introducidas */
    currency: 'EUR',
    style: 'currency',
    minimumFractionDigits: 2
})