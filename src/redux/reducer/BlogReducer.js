import {
  REQUEST_BLOGS,
  RECEIVE_BLOGS,
  FAILURE_BLOGS,
} from 'redux/ActionType'

const initialState = {
  code: null,
  message: null,
  data: 
    { "current_page": 1, "data": [{ "id": 1, "title": "Sit numquam quasi non. Esse sunt vel est facere. Ullam earum et placeat officiis tenetur dolores.", "descrition": "Aliquid nulla eius maxime. Magni accusantium quo provident et porro deleniti ea. Fugit non quia vitae inventore odio odio maiores. Debitis iste in dolor odit vitae. Aliquam consequatur quos aut quo quia quia dignissimos. Assumenda eius enim voluptatum ut quasi. Natus illum sequi voluptatem. Dolore doloremque sed maxime et. Rerum consectetur aut sit et odio eos. Excepturi eos et iusto est.", "created_at": "2021-02-01T17:22:46.000000Z", "updated_at": "2021-02-01T17:22:46.000000Z" }, { "id": 2, "title": "Soluta id sit nemo et rerum incidunt sequi. Culpa sed et unde.", "descrition": "Ut est veritatis et vero nihil et quo veritatis. Et illo est facere et eius. Sed consequuntur ipsa qui voluptatem. Consequatur qui et nam. Necessitatibus qui pariatur molestiae voluptas eveniet aut. Sed enim dicta quidem reprehenderit. Dolor accusamus adipisci provident ipsam voluptatem doloremque est. Dolore quo consequatur in cumque.", "created_at": "2021-02-01T17:22:46.000000Z", "updated_at": "2021-02-01T17:22:46.000000Z" }, { "id": 3, "title": "Quaerat officiis in et. Doloremque et quis cupiditate illum. Vel dolorum illum corporis et.", "descrition": "Aut repellendus exercitationem deleniti aliquam corporis in et. Quibusdam ut veniam voluptatibus quis eos. Natus saepe et quia ab. Et quo distinctio in. Consectetur culpa non accusamus voluptatem beatae accusantium sint. Optio quia itaque cupiditate veniam. Quidem aut rerum perspiciatis dolorem.", "created_at": "2021-02-01T17:22:46.000000Z", "updated_at": "2021-02-01T17:22:46.000000Z" }, { "id": 4, "title": "Aut velit et quidem et maiores modi totam. Eum aliquam aut itaque nulla maiores.", "descrition": "Blanditiis quae at quaerat qui ipsam dolorum aspernatur. Voluptatem cumque illo ut sequi. Molestias animi voluptatem repellat magni est.", "created_at": "2021-02-01T17:22:46.000000Z", "updated_at": "2021-02-01T17:22:46.000000Z" }, { "id": 5, "title": "Commodi sed sunt ea vel. Quia iste voluptatem quia iusto dolores. Et et consequatur sed.", "descrition": "Qui hic qui assumenda quia totam. Placeat velit ratione sapiente. Provident minus esse facere et ducimus sit et quam. Nihil qui aut et quam dignissimos quam minima. Et deleniti sed nisi repudiandae voluptatem et adipisci. Suscipit suscipit cum perspiciatis maxime iste laboriosam aliquam est.", "created_at": "2021-02-01T17:22:46.000000Z", "updated_at": "2021-02-01T17:22:46.000000Z" }, { "id": 6, "title": "Aliquid provident quo et explicabo eos. Porro nam ducimus magni voluptatum maiores ex modi maxime.", "descrition": "Aspernatur ut tempora ducimus soluta soluta quis expedita. Voluptas et aliquam error cumque. Fuga quod qui labore quos doloribus ut ab. Dolorem quidem placeat repudiandae ab. Temporibus necessitatibus sit neque aut unde atque. Ipsam ut est vero dolorem. Atque odit in ullam molestias soluta eum temporibus.", "created_at": "2021-02-01T17:22:46.000000Z", "updated_at": "2021-02-01T17:22:46.000000Z" }, { "id": 7, "title": "Nisi et quia maiores sunt illum est sit. Aut expedita deserunt nobis et natus unde ullam sapiente.", "descrition": "Aut eos nihil nulla harum nihil. Eveniet voluptas at reprehenderit. Optio qui eius voluptas minus sint. Aut officiis eos voluptatem eaque. Nostrum quasi et quo ut. Voluptatibus voluptates voluptate sapiente laboriosam fuga tenetur. Enim vitae aut aut suscipit nemo. Eveniet doloribus perferendis excepturi perferendis quam sit.", "created_at": "2021-02-01T17:22:46.000000Z", "updated_at": "2021-02-01T17:22:46.000000Z" }, { "id": 8, "title": "Sit qui aliquam iusto. Vel error quibusdam vel dolores ipsa.", "descrition": "Eveniet qui et harum quisquam. Et debitis harum illum dolores. Id excepturi ex tempora est. In qui totam quia quod amet vel voluptas. Aut exercitationem atque corporis accusantium recusandae qui. Et consequatur aspernatur in saepe sed. Quo iure aut sint vitae impedit. Ea non magnam in distinctio dolorem laudantium sit.", "created_at": "2021-02-01T17:22:46.000000Z", "updated_at": "2021-02-01T17:22:46.000000Z" }, { "id": 9, "title": "Id commodi sunt id. Ducimus voluptatem amet modi eaque qui. Reprehenderit esse aut laboriosam.", "descrition": "Et est voluptatum atque eos. Est minima aut iste quis aspernatur suscipit. Dolore harum commodi in aut. Quaerat temporibus debitis non eligendi. Est ut aut omnis modi suscipit. Doloribus voluptas exercitationem et rerum rerum molestiae. Autem dolore ut corrupti est. Nihil modi unde consequatur. Et rerum et sunt et. Voluptates aut et fugit magnam vero iste unde.", "created_at": "2021-02-01T17:22:46.000000Z", "updated_at": "2021-02-01T17:22:46.000000Z" }, { "id": 10, "title": "Animi aperiam consequatur est eum voluptas. Occaecati nostrum aut culpa incidunt.", "descrition": "Repudiandae deserunt amet qui ipsa. Rerum rem assumenda necessitatibus. Reprehenderit totam totam iusto et voluptas velit numquam. At aperiam distinctio sed laborum eligendi. Voluptatem neque amet nam facere. Illum ex delectus doloribus consequatur. Sed magni et voluptatem beatae.", "created_at": "2021-02-01T17:22:46.000000Z", "updated_at": "2021-02-01T17:22:46.000000Z" }], "first_page_url": "http:\/\/ads.com\/api\/blogs?page=1", "from": 1, "last_page": 5, "last_page_url": "http:\/\/ads.com\/api\/blogs?page=5", "links": [{ "url": null, "label": "&laquo; Previous", "active": false }, { "url": "http:\/\/ads.com\/api\/blogs?page=1", "label": 1, "active": true }, { "url": "http:\/\/ads.com\/api\/blogs?page=2", "label": 2, "active": false }, { "url": "http:\/\/ads.com\/api\/blogs?page=3", "label": 3, "active": false }, { "url": "http:\/\/ads.com\/api\/blogs?page=4", "label": 4, "active": false }, { "url": "http:\/\/ads.com\/api\/blogs?page=5", "label": 5, "active": false }, { "url": "http:\/\/ads.com\/api\/blogs?page=2", "label": "Next &raquo;", "active": false }], "next_page_url": "http:\/\/ads.com\/api\/blogs?page=2", "path": "http:\/\/ads.com\/api\/blogs", "per_page": 10, "prev_page_url": null, "to": 10, "total": 50 }
  ,
  error: null,

}
const BlogReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_BLOGS:
      return {
        ...state,

      }
    case RECEIVE_BLOGS:
      return {
        ...state,

        data: action.payload.data.data.blogs
      }
    case FAILURE_BLOGS:
      return {
        ...state,

        error: payload.error
      }
    default:
      return {
        ...state
      }
  }
}

export default BlogReducer
