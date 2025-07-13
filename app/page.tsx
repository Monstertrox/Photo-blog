"use client"

import { useState } from "react"
import { Heart, Plus, Calendar, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Image from "next/image"

interface Photo {
  id: string
  url: string
  alt: string
}

interface Moment {
  id: string
  title: string
  date: string
  description: string
  photos: Photo[]
}

export default function RomanticPhotoBlog() {
  const [moments, setMoments] = useState<Moment[]>([
    {
      id: "1",
      title: "Nuestra Cita En Ichiraku",
      date: "2024-03-29",
      description:
        "Ese día te veías tan preciosa que no pude evitar no tomarte fotos, un restaurante bonito para estar juntitos.",
      photos: [
        { id: "1", url: "/IshirakuRamen.jpg?height=400&width=600", alt: "Primera cita" },
        { id: "2", url: "/ichiraku_Yuri.webp?height=400&width=600", alt: "Sonrisas nerviosas" },
      ],
    },
    {
      id: "2",
      title: "Una día en casita y llegada de Maru",
      date: "2024-07-14",
      description:
        "El día de hacernos novios bonitos pasamos la noche juntos y presenciamos la llegada de Maru con esta foto hermosa que te tomé",
      photos: [
        { id: "3", url: "/Yuri_Maru.webp?height=400&width=600", alt: "Yuri y Maru" },
        { id: "4", url: "/UnDiaBonito.jpg?height=400&width=600", alt: "Un día bonito" },
        { id: "5", url: "/Maru.webp?height=400&width=600", alt: "Maru"},
      ],
    },
    {
      id: "3",
      title: "Primera vez conociendo mi familia",
      date: "2024-08-2",
      description:
        "El primer día que conociste a mi familia, te recibieron con emapanaditas ricas y le encantaste a tu suegrita.",
      photos: [
        { id: "6", url: "/Dos_Preciosas.jpeg?height=400&width=600", alt: "Dos Preciosas" },
        { id: "7", url: "/doslindas.jpeg?height=400&width=600", alt: "Dos lindas" },
      ],
    },
    {
      id: "4",
      title: "Un día en casita felices con nuestro amor",
      date: "2024-08-17",
      description:
        "Un día relajados juntitos demostrando todo el amor hermoso que nos tenemos. Siempre te ves tan hermosa, eres mi diosa",
      photos: [
        { id: "8", url: "/17-08(1).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "9", url: "/17-08(2).jpeg?height=400&width=600", alt: "17-08(2)" },
        { id: "10", url: "/17-08(3).jpeg?height=400&width=600", alt: "17-08(3)" },
        { id: "11", url: "/17-08(4).jpeg?height=400&width=600", alt: "17-08(4)" },
      ],
    },
    {
      id: "5",
      title: "Cine con mi amorcito",
      date: "2024-09-07",
      description:
        "Fuimos a ver una película juntitos como noviecitos, segunda vez en cine con mi reina prechiosota.",
      photos: [
        { id: "12", url: "/7-9(1).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "13", url: "/7-9(2).jpeg?height=400&width=600", alt: "17-08(2)" },
        { id: "14", url: "/7-9(3).jpeg?height=400&width=600", alt: "17-08(3)" },
      ],
    },
    {
      id: "6",
      title: "Una escapadita de novios.",
      date: "2024-09-11",
      description:
        "Ese día caminamos en el parque de flores y tomamos una politas que no conociamos. Aunque no todo fuera bien en ese momento me alegra pasar rato contigo y demostrarte todo lo que te amo.",
      photos: [
        { id: "15", url: "/11-09(1).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "16", url: "/11-09(2).jpeg?height=400&width=600", alt: "17-08(2)" },
        { id: "17", url: "/11-09(3).jpeg?height=400&width=600", alt: "17-08(3)" },
      ],
    },
    {
      id: "7",
      title: "Nuestro primer viaje a Guatavita.",
      date: "2024-10-6",
      description:
        "Nuestro primer viajecito y fue a la laguna de Guatavita donde aprendimos acerca de ella y el pueblo, comimos delicioso y la pasamos muy rico juntos como nuestro viajecito de novios.",
      photos: [
        { id: "18", url: "/06-10(1).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "19", url: "/06-10(2).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "20", url: "/06-10(3).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "21", url: "/06-10(4).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "22", url: "/06-10(5).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "23", url: "/06-10(6).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "24", url: "/06-10(7).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "25", url: "/06-10(8).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "26", url: "/06-10(9).jpeg?height=400&width=600", alt: "17-08(1)" },
      ],
    },
    {
      id: "8",
      title: "Cumpleaños de josephcito",
      date: "2024-11-09",
      description:
        "Después de todo lo que pasó te agradezco infinitamente haber estado para mí, eres lo que yo más amo y atesoro, volvemos a tomarnos fotitos y a tu casita por el cumpleaños del josephcito.",
      photos: [
        { id: "18", url: "/09-11(1).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "19", url: "/09-11(2).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "20", url: "/09-11(3).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "20", url: "/09-11(3).jpeg1.jpeg?height=400&width=600", alt: "17-08(1)" },
      ],
    },
    {
      id: "9",
      title: "Mi cumpleaños",
      date: "2024-11-18",
      description:
        "El día de mi cumpleaños me sorprendiste con la mejor fiesta de cumpleaños que he tenido, fue hermoso ver cómo hiciste todo en secretito y darme esa fiestota bonita. TE AMO",
      photos: [
        { id: "18", url: "/18-11(1).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "19", url: "/18-11(2).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "20", url: "/18-11(3).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "20", url: "/18-11(4).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "20", url: "/18-11(5).jpeg?height=400&width=600", alt: "17-08(1)" },
      ],
    },
    {
      id: "10",
      title: "Concierto Enjambre",
      date: "2024-11-29",
      description:
        "Un concierto increible de una banda increible con el amor de mi vida; amé con todo mi corazón cantar impacto a todo pulmon mirandonos a los ojos.",
      photos: [
        { id: "18", url: "/29-11(1).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "19", url: "/29-11(2).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "20", url: "/29-11(3).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "20", url: "/29-11(4).jpeg?height=400&width=600", alt: "17-08(1)" },
      ],
    },
    {
      id: "11",
      title: "En el parque con el amor de mi vida",
      date: "2024-12-15",
      description:
        "Me encantó haber jugado contigo el futbol, haber comido juntitos y llevarte cargadita, un día muy chistoso en familia.",
      photos: [
        { id: "18", url: "/15-12(1).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "19", url: "/15-12(2).jpeg?height=400&width=600", alt: "17-08(1)" },
        ],
    },
    {
      id: "12",
      title: "CUMPLEAÑOS DEL AMOR DE MI VIDA",
      date: "2024-12-20",
      description:
        "Este día quería sorprenderte totalmente porque mi amorcito bonita merece todo lo hermoso que hay en esta vida y adoro consentirla muchote, espero este día haberte hecho la más feliz porque lo mereces, te amo, mi pastelito de morita. ",
      photos: [
        { id: "18", url: "/20-12(3).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "19", url: "/20-12(2).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "20", url: "/20-12(1).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "20", url: "/20-12(4).jpeg?height=400&width=600", alt: "17-08(1)" },
      ],
    },
    {
      id: "13",
      title: "Fin de año juntitos",
      date: "2024-12-31",
      description:
        "Me fascinó haber estado juntos en la mañana de este día, pudimos despedir el año para dar comienzo a uno nuevo juntos, fue muy especial este momento y te veías tan radiante, mi solecito hermosa.",
      photos: [
        { id: "18", url: "/31-12(1).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "19", url: "/31-12(2).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "20", url: "/31-12(3).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "21", url: "/31-12(4).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "22", url: "/31-12(5).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "23", url: "/31-12(6).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "24", url: "/31-12(7).jpeg?height=400&width=600", alt: "17-08(1)" },
      ],
    },
    {
      id: "14",
      title: "Celebrando un día antes el 14 de febrero",
      date: "2025-02-13",
      description:
        "Otra escapadita juntos por una increible razón como la es celebrar nuestro amor gigante.",
      photos: [
        { id: "18", url: "/13-02.jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "19", url: "/13-02(1).jpeg?height=400&width=600", alt: "17-08(1)" },
      ],
    },
    {
      id: "15",
      title: "Salida a Monserrate sin miedo a maldiciones.",
      date: "2025-03-09",
      description:
        "Una salida a donde todos dicen que no se debe subir en pareja, pero nuestro amor es más grande que esas maldiciones y estamos destinados a estar juntitos",
      photos: [
        { id: "18", url: "/09-3(1).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "19", url: "/09-3(2).jpeg?height=400&width=600", alt: "17-08(1)" },
      ],
    },
    {
      id: "16",
      title: "Cine en familia",
      date: "2025-03-23",
      description:
        "Fuimos a ver la cenicienta y aunque no estuviera tan buena la película, pudimos disfrutar demasiado todos juntos y reir; en esta salidita tomamos fotos increibles.",
      photos: [
        { id: "18", url: "/23-03(1).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "19", url: "/23-03(2).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "20", url: "/23-03(3).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "21", url: "/23-03(4).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "22", url: "/23-03(5).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "23", url: "/23-03(6).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "24", url: "/23-03(7).jpeg?height=400&width=600", alt: "17-08(1)" },

      ],
    },
    {
      id: "17",
      title: "Cita Secretita",
      date: "2025-04-05",
      description:
        "Cita a escondidas con mi amorcito para obtener los juguetes de Minecraft y estar tranquilos juntos. No tienes idea de lo mucho que me tranquiliza tu manita en mi cara, te amo, mi vida.",
      photos: [
        { id: "18", url: "/05-04(1).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "19", url: "/05-04(2).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "20", url: "/05-04(3).jpeg?height=400&width=600", alt: "17-08(1)" },

      ],
    },
    {
      id: "18",
      title: "Escapadita para comer",
      date: "2025-04-30",
      description:
        "Aunque no logramos nuestro cometido de comer la buguer master me encantó haber pasado ese tiempo juntos, besarnos y desestresarnos mutuamente; eres mi cura a todos los males, te adoro.",
      photos: [
        { id: "18", url: "/30-04(1).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "19", url: "/30-04(2).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "20", url: "/30-04(3).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "21", url: "/30-04(4).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "22", url: "/30-04(5).jpeg?height=400&width=600", alt: "17-08(1)" },
      ],
    },
    {
      id: "19",
      title: "Nuestra primera Filbo Juntitos",
      date: "2025-05-03",
      description:
        "Decidimos ir juntitos a la Feria del libro y terminamos con muchos libros, amé demasiado tu sonrisa al llevarte un libro que tanto te gustara, me encantó leer cuentos de niños juntitos, le leeremos a nuestros bebés. ES INCREIBLE LO BELLA QUE ERES MI MORENITA PRECIOSA.",
      photos: [
        { id: "18", url: "/03-05(1).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "19", url: "/03-05(2).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "20", url: "/03-05(3).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "21", url: "/03-05(4).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "22", url: "/03-05(5).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "23", url: "/03-05(6).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "24", url: "/03-05(7).jpeg?height=400&width=600", alt: "17-08(1)" },
        { id: "25", url: "/03-05(8).jpeg?height=400&width=600", alt: "17-08(1)" },
      ],
    },
    {
      id: "20",
      title: "Cumpleaños de tu awelita bonita",
      date: "2025-26-03",
      description:
        "Me invitaste a los cumpleaños de tu abuelita y por supuesto que no iba a faltar, comimos bien, nos reimos mucho y tu abuelita lo disfrutó, me encantó haberla engañado para que se pusiera más bonita e ir bien arregladita.",
      photos: [
        { id: "18", url: "/26-05(1).jpeg?height=400&width=600", alt: "17-08(1)" },
      ],
    },
  ])

  const [selectedMoment, setSelectedMoment] = useState<Moment | null>(null)
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [isAddingMoment, setIsAddingMoment] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editingMoment, setEditingMoment] = useState<Moment | null>(null) 
  const [newMoment, setNewMoment] = useState({
    title: "",
    date: "",
    description: "",
    photos: [] as string[],
  })

  const addMoment = () => {
    if (newMoment.title && newMoment.date && newMoment.description) {
      const moment: Moment = {
        id: Date.now().toString(),
        title: newMoment.title,
        date: newMoment.date,
        description: newMoment.description,
        photos: newMoment.photos.map((url, index) => ({
          id: `${Date.now()}-${index}`,
          url,
          alt: `${newMoment.title} - Foto ${index + 1}`,
        })),
      }
      setMoments([moment, ...moments])
      setNewMoment({ title: "", date: "", description: "", photos: [] })
      setIsAddingMoment(false)
    }
  }
  const deleteMoment = (id: string) => {
  setMoments(moments.filter(moment => moment.id !== id))
}
const startEditing = (moment: Moment) => {
  setEditingMoment(moment)
  setIsEditing(true)
}
const updateMoment = () => {
  if (editingMoment) {
    setMoments(moments.map(m => (m.id === editingMoment.id ? editingMoment : m)))
    setEditingMoment(null)
    setIsEditing(false)
  }
}

  const addPhotoUrl = () => {
    setNewMoment({
      ...newMoment,
      photos: [...newMoment.photos, ""],
    })
  }

  const updatePhotoUrl = (index: number, url: string) => {
    const updatedPhotos = [...newMoment.photos]
    updatedPhotos[index] = url
    setNewMoment({
      ...newMoment,
      photos: updatedPhotos,
    })
  }

  const removePhoto = (index: number) => {
    const updatedPhotos = newMoment.photos.filter((_, i) => i !== index)
    setNewMoment({
      ...newMoment,
      photos: updatedPhotos,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-8 w-8 text-pink-200" fill="currentColor" />
            <h1 className="text-4xl font-bold">Nuestro Album</h1>
            <Heart className="h-8 w-8 text-pink-200" fill="currentColor" />
          </div>
          <p className="text-xl text-purple-100">Un álbum de amor y recuerdos especiales</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Add Moment Button */}
        <div className="mb-8 text-center">
          <Dialog open={isAddingMoment} onOpenChange={setIsAddingMoment}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full shadow-lg">
                <Plus className="h-5 w-5 mr-2" />
                Agregar Nuevo Momento
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl text-purple-700">Crear Nuevo Momento</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Título del Momento</Label>
                  <Input
                    id="title"
                    value={newMoment.title}
                    onChange={(e) => setNewMoment({ ...newMoment, title: e.target.value })}
                    placeholder="Ej: Nuestra primera cita"
                  />
                </div>
                <div>
                  <Label htmlFor="date">Fecha</Label>
                  <Input
                    id="date"
                    type="date"
                    value={newMoment.date}
                    onChange={(e) => setNewMoment({ ...newMoment, date: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="description">Descripción</Label>
                  <Textarea
                    id="description"
                    value={newMoment.description}
                    onChange={(e) => setNewMoment({ ...newMoment, description: e.target.value })}
                    placeholder="Cuenta la historia de este momento especial..."
                    rows={3}
                  />
                </div>
                <div>
                  <Label>Fotos (URLs)</Label>
                  {newMoment.photos.map((photo, index) => (
                    <div key={index} className="flex gap-2 mt-2">
                      <Input
                        value={photo}
                        onChange={(e) => updatePhotoUrl(index, e.target.value)}
                        placeholder="URL de la foto"
                      />
                      <Button type="button" variant="outline" size="sm" onClick={() => removePhoto(index)}>
                        Eliminar
                      </Button>
                    </div>
                  ))}
                  <Button type="button" variant="outline" onClick={addPhotoUrl} className="mt-2 bg-transparent">
                    <Plus className="h-4 w-4 mr-2" />
                    Agregar Foto
                  </Button>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button onClick={addMoment} className="bg-purple-600 hover:bg-purple-700">
                    Guardar Momento
                  </Button>
                  <Button variant="outline" onClick={() => setIsAddingMoment(false)}>
                    Cancelar
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog open={isEditing} onOpenChange={setIsEditing}>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl text-purple-700">Editar Momento</DialogTitle>
              </DialogHeader>
              {editingMoment && (
                <div className="space-y-4">
                  <Input
                    value={editingMoment.title}
                    onChange={(e) => setEditingMoment({ ...editingMoment, title: e.target.value })}
                  />
                  <Input
                    type="date"
                    value={editingMoment.date}
                    onChange={(e) => setEditingMoment({ ...editingMoment, date: e.target.value })}
                  />
                  <Textarea
                    value={editingMoment.description}
                    onChange={(e) => setEditingMoment({ ...editingMoment, description: e.target.value })}
                  />
                  <div className="flex gap-2 pt-4">
                    <Button onClick={updateMoment}>Guardar Cambios</Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>Cancelar</Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>

        {/* Moments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moments.map((moment) => (
            <Card
              key={moment.id}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={moment.photos[0]?.url || "/placeholder.svg?height=200&width=400"}
                  alt={moment.photos[0]?.alt || moment.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{moment.title}</h3>
                  <div className="flex items-center gap-1 text-sm">
                    <Calendar className="h-4 w-4" />
                    {new Date(moment.date).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{moment.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-purple-600">
                    <Camera className="h-4 w-4" />
                    {moment.photos.length} foto{moment.photos.length !== 1 ? "s" : ""}
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
                        onClick={() => setSelectedMoment(moment)}
                      >
                        Ver Momento
                      </Button>
                    </DialogTrigger>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteMoment(moment.id)}
                    >
                      Eliminar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => startEditing(moment)}
                    >
                      Editar
                    </Button>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-purple-700 flex items-center gap-2">
                          <Heart className="h-6 w-6 text-pink-500" fill="currentColor" />
                          {selectedMoment?.title}
                        </DialogTitle>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          {selectedMoment &&
                            new Date(selectedMoment.date).toLocaleDateString("es-ES", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                        </div>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">{selectedMoment?.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedMoment?.photos.map((photo) => (
                            <div
                              key={photo.id}
                              className="relative aspect-video overflow-hidden rounded-lg cursor-pointer"
                            >
                              <Image
                                src={photo.url || "/placeholder.svg"}
                                alt={photo.alt}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                                onClick={() => setSelectedPhoto(photo)}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {moments.length === 0 && (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-purple-300 mx-auto mb-4" />
            <h3 className="text-xl text-gray-600 mb-2">Aún no hay momentos</h3>
            <p className="text-gray-500">¡Comienza agregando tu primer momento especial!</p>
          </div>
        )}
      </main>

      {/* Photo Modal */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl">
          <div className="relative aspect-video">
            {selectedPhoto && (
              <Image
                src={selectedPhoto.url || "/placeholder.svg"}
                alt={selectedPhoto.alt}
                fill
                className="object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto text-center px-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="h-5 w-5 text-pink-200" fill="currentColor" />
            <p className="text-purple-100">Cada momento contigo es un tesoro</p>
            <Heart className="h-5 w-5 text-pink-200" fill="currentColor" />
          </div>
          <p className="text-sm text-purple-200">Nuestro álbum de amor • {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}
