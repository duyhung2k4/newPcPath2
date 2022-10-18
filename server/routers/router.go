package routers

import (
	"net/http"

	"app/controller"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/cors"
)

func Router() {
	app := chi.NewRouter()

	cors := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: true,
		MaxAge:           300,
	})
	app.Use(cors.Handler)

	app.Route("/get", func(r chi.Router) {
		r.Get("/card", controller.GetCard)
		r.Get("/main", controller.GetMain)
		r.Get("/cpu", controller.GetCpu)
		r.Get("/ram", controller.GetRam)
		r.Get("/rom", controller.GetRom)
		r.Get("/psup", controller.GetPSup)
		r.Get("/heat_dissipation", controller.GetHeatDissipation)
	})

	app.Route("/post", func(r chi.Router) {
		r.Post("/card", controller.AddCard)
		r.Post("/main", controller.AddMain)
		r.Post("/cpu", controller.AddCpu)
		r.Post("/ram", controller.AddRam)
		r.Post("/rom", controller.AddRom)
		r.Post("/psup", controller.AddPsup)
		r.Post("/heat_dissipation", controller.AddHeatDissipation)
	})

	app.Route("/update", func(r chi.Router) {
		r.Post("/card", controller.UpdateCard)
		r.Post("/main", controller.UpdateMain)
		r.Post("/cpu", controller.UpdateCpu)
		r.Post("/ram", controller.UpdateRam)
		r.Post("/rom", controller.UpdateRom)
		r.Post("/psup", controller.UpdatePsup)
		r.Post("/heat_dissipation", controller.UpdateHeatDissipation)
	})

	app.Route("/delete", func(r chi.Router) {
		r.Post("/card", controller.DeleteCard)
		r.Post("/main", controller.DeleteMain)
		r.Post("/cpu", controller.DeleteCpu)
		r.Post("/ram", controller.DeleteRam)
		r.Post("/rom", controller.DeleteRom)
		r.Post("/psup", controller.DeletePsup)
		r.Post("/heat_dissipation", controller.DeleteHeatDissipation)
	})

	http.ListenAndServe(":3001", app)
}
