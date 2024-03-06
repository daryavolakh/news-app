export const formatDate = (value: string) => {
    const selectedDate = new Date(value);
    
    const 
      year = selectedDate.getFullYear(),
      month = String(selectedDate.getMonth() + 1).padStart(2, '0'),
      day = String(selectedDate.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}