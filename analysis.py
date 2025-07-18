import pandas as pd
import json

# Leer el archivo Excel actualizado
file = 'Assesment-v.2.xlsx'
df = pd.read_excel(file)

# Indicadores
total_gestionados = len(df)
total_completados = (df['Progreso'].str.lower() == 'completado').sum()
avance_general = round((total_completados / total_gestionados) * 100, 2) if total_gestionados > 0 else 0
incremento_neto = total_completados  # Por ahora igual a completados

indicadores = {
    "incremento_neto": int(incremento_neto),
    "checklists_gestionados": int(total_gestionados),
    "avance_general": float(avance_general),
    "checklists_completados": int(total_completados)
}

with open('data.json', 'w') as f:
    json.dump(indicadores, f, indent=2)

print("Indicadores calculados y guardados en data.json")
