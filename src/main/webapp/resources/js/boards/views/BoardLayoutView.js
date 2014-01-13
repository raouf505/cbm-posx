define(["marionette", "tpl!boards/templates/boardLayoutViewTpl.html", "boards/views/BoardButtonView", "boards/views/BoardDetailsModalView"], function(Marionette, template, BoardButtonView, BoardDetailsModalView) {
	
	return Marionette.Layout.extend({
		className: "boardLayout",
		template: template,
		regions: {
			boardButtonRegion: ".boardButtonRegion",
			boardModalRegion: ".boardModalRegion"
		},
		onRender: function() {
			this.boardButtonRegion.show(new BoardButtonView({model: this.model}));
			this.boardModalRegion.show(new BoardDetailsModalView({model: this.model}));
			
			var view = this;
			this.$(".modal").on('hidden.bs.modal', function() {
				view.render();
			});
		},
		events: {
			"click #deleteBoardBtn": function() {
				this.model.destroy();
			},
			"click #updateBoardBtn": function() {
				var boardModel = this.model;
				var boardName = this.$("#boardName").val();
				
				if(this.collection.findWhere({name: boardName})) {
					this.$("#updateBoardModalErrorMsg").html("La mesa ya existe.");
				}
				else if (!boardModel.save({name: boardName})) {
					this.$("#updateBoardModalErrorMsg").html(boardModel.validationError);
				} else {
					this.$(".modal").modal("hide");
				}
			}
		}
	});
	
});